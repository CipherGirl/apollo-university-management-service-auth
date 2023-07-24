import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

// import userService from './app/modules/users/user.service'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes

app.use('/api/v1/user/', userRouter)

// app.get('/', (req: Request, res: Response) => {
//   // await userService.createUser({ id: '999', password: '1234', role: 'student' })
//   // res.send('Working Successfully!')
//   throw new ApiError(400, "ERRRORRR")
// })

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   next('ERRORRR')
// })

app.use(globalErrorHandler)

export default app
