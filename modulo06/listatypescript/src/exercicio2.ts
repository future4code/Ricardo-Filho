function variableType  (parameters: any): string {
    const type: string = typeof parameters
    return `O paramentro informado é um(a): ${type}`
}
console.log(variableType ("Ricardo"));
