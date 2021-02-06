// import httpResponse from '../../helpers/http-response'
import {UniqueConstraintError} from '../../helpers/errors'

export default function makeRoleList({ database }) {
	return Object.freeze({
		add,
		remove,
		update,
		findById,
		findByName,
		getRoles,
		initializeRole,
	})

	async function add(name) {}
	async function remove() {}
	async function update() {}
	async function findById() {}
	async function findByName() {}
	async function getRoles() {}

	async function initializeRole() {
		const db = await database
		const {err, count} = await db.collection('roles').estimatedDocumentCount()
		if(!err && count === 0) {
			db.collection('roles')
			.insertMany([
				{name: 'admin'},
				{name: 'moderator'},
				{name: 'user'}
			])
			.catch(mongoError => {
        const [errorCode] = mongoError.message.split(' ')
        if (errorCode === 'E11000') {
          const [_, mongoIndex] = mongoError.message.split(':')[2].split(' ')
          throw new UniqueConstraintError(
            mongoIndex === 'ContactEmailIndex' ? 'emailAddress' : 'contactId'
          )
        }
        throw mongoError
      })
		}
	}
}

