import container from '../containers/container'
import { Request, Response } from 'express'

class ModelController {
    baseService: any
    constructor() {
        this.baseService = container.resolve('baseService')

        this.check = this.check.bind(this)
        this.execute = this.execute.bind(this)
    }

    check(req: Request, res: Response) {
        try {
            const message = this.baseService.check()
            res.json(message)
        } catch (error: any) {
            res.status(500).send({ error: error.message })
        }
    }

    async execute(req: Request, res: Response) {
        try {
            const {
                model_name,
                system_prompt = '',
                user_prompt,
                response_max_length = -1,
                list_format_response = false,
                exclude_bias_references = true,
                excluded_text = '',
            } = req.body
            const modelResponse = await this.baseService.execute(
                model_name,
                system_prompt,
                user_prompt,
                response_max_length,
                list_format_response,
                exclude_bias_references,
                excluded_text
            )
            res.send({ response: modelResponse })
        } catch (error: any) {
            res.status(500).send({ error: error.message })
        }
    }
}

export default ModelController
