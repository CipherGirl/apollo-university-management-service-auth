import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()

// import userService from './app/modules/users/user.service'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes

app.use('/api/v1/user/', UserRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // await userService.createUser({ id: '999', password: '1234', role: 'student' })
//   // res.send('Working Successfully!')
//   // throw new ApiError(400, 'ERRRORRR')
//   // Promise.reject(new Error("Unhandled Rejection"))
//   throw new Error('Testing Error Logger')
// })

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   next('ERRORRR')
// })

app.use(globalErrorHandler)

export default app
