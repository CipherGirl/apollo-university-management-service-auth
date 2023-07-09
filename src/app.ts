import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

import userService from './app/modules/users/user.service'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes

app.use('/api/v1/user/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({ id: '999', password: '1234', role: 'student' })
  res.send('Working Successfully!')
})

export default app
