import makeDb from '../../db'
import makeRoleList from './role'

const database = makeDb()
const roleList = makeRoleList({ database })

roleList.initializeRole()
