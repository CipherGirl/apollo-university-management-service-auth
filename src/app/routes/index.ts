import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    routes: UserRoutes,
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach(moduleRoute =>
  router.use(moduleRoute.path, moduleRoute.routes)
)

router.use('/users ', UserRoutes)
router.use('/academic-semesters/', AcademicSemesterRoutes)

export default router
