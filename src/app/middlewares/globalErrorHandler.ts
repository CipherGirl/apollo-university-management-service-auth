import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).json({ error: err })
  next()
}

export default globalErrorHandler
