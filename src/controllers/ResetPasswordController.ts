import { Request, Response } from "express"
import { ResetPasswordService } from "../services/ResetPasswordService"

export class ResetPasswordController {
  async handle(request: Request, response: Response) {
    const user_id = request.params.id
    const { password, resetToken } = request.body

    const service = new ResetPasswordService()
    const result = await service.execute(user_id, password, resetToken)

    return response.status(result.code).json(result.data)
  }
}
