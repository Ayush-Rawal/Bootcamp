const refresh = 'refresh';
const changeCity = 'changeCity';
const changeStatus = 'changeStatus'

export function refresh() {
    return {
        type: refresh
    }
}

export function changeCity(city) {
    return {
        type: changeCity,
        city
    }
}

export function changeStatus(status) {
    return {
        type: changeStatus,
        status
    }
}