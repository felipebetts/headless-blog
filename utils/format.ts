

export const formatDate = (str: string) => {
    const date = new Date(str)
    return date.toLocaleDateString('pt-BR', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}
