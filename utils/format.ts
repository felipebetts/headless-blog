

export const formatDate = (str: string) => {
    const date = new Date(str)
    return date.toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    })
}
