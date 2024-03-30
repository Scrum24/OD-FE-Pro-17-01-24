const USER_ORDER_LIST = "userOrderList";

export function getOrders() {
    const ls = window.localStorage;
    const orderList = ls.getItem(USER_ORDER_LIST);

    return orderList ? JSON.parse(orderList) : [];
}

export function getOrderByTSId(orderTSId) {
    return getOrders().find(order => order.orderTSId === orderTSId);
}

export function addOrderToLSList(orderFormInfo) {
    const ls = window.localStorage;
    const orderList = ls.getItem(USER_ORDER_LIST);

    if (!orderList) {
        const newList = [orderFormInfo];
        ls.setItem(USER_ORDER_LIST, JSON.stringify(newList));
    } else {
        const list = JSON.parse(orderList);
        list.push(orderFormInfo);
        ls.setItem(USER_ORDER_LIST, JSON.stringify(list));
    }
}

export function removeOrderFromLSList(orderTSId) {
    const ls = window.localStorage;
    const orderList = ls.getItem(USER_ORDER_LIST);

    if (orderList) {
        const list = JSON.parse(orderList);

        let i = list.findIndex(el => el.orderTSId === orderTSId);
        if (i !== -1) {
            list.splice(i, 1);
            ls.setItem(USER_ORDER_LIST, JSON.stringify(list));
        }
    }
}