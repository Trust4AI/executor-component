import { OllamaModel } from '../interfaces/OllamaModel'

const models: { [name: string]: OllamaModel } = {
    "gemma-2b": {
        name: 'gemma:2b',
        host:
            process.env.GEMMA_HOST || process.env.NODE_ENV === 'docker'
                ? 'http://gemma-2b:11434'
                : 'http://localhost:11434',
    },
    "gemma-7b": {
        name: 'gemma:7b',
        host:
            process.env.GEMMA_HOST || process.env.NODE_ENV === 'docker'
                ? 'http://gemma-7b:11435'
                : 'http://localhost:11435',
    },
    "llama2-7b": {
        name: 'llama2',
        host:
            process.env.LLAMA2_HOST || process.env.NODE_ENV === 'docker'
                ? 'http://llama2-7b:11436'
                : 'http://localhost:11436',
    },
    "llama2-13b": {
        name: 'llama2:13b',
        host:
            process.env.LLAMA2_HOST || process.env.NODE_ENV === 'docker'
                ? 'http://llama2-13b:11437'
                : 'http://localhost:11437',
    },
    "mistral-7b": {
        name: 'mistral',
        host:
            process.env.MISTRAL_HOST || process.env.NODE_ENV === 'docker'
                ? 'http://mistral-7b:11438'
                : 'http://localhost:11438',
    },
}

const getModelConfig = (key: string) => {
    if (models[key]) {
        return {
            name: models[key].name,
            host: models[key].host,
        }
    } else {
        return null
    }
}

export { getModelConfig }
