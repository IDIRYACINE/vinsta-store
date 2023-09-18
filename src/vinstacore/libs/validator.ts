

export const isValidId = (id: string) => {

    const regex = /^[a-zA-Z]\w*$/

    return !regex.test(id) && id.length > 0

}