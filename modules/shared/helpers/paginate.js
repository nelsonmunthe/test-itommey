const paginate = async (model, pageSize, pageLimit, roleId) => {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;


        let options = {
            offset: getOffset(page, limit),
            limit: limit,
        };

        // take in the model, take in the options
        let {count, rows} = model;

        if(roleId && roleId.trim() !== ""){
            count = rows.length;
            rows = limitData(rows, pageLimit, page);            
        }
        
        return {
            previous_page: getPreviousPage(page),
            current_page: page,
            next_page: getNextPage(page, limit, count),
            total: count,
            per_page: limit,
            data: rows
        }
    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page, limit) => {
    return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total/limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}

const limitData = (model, pageSize, page) => {
  return model.slice((page - 1) * pageSize, page * pageSize);
};

module.exports = paginate