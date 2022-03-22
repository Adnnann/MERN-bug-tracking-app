import express from 'express'
import bugsCtrl from '../controllers/bug.controller'

const router = express.Router()

router.route('/api/bugs')
.post(bugsCtrl.createBug)
.get(bugsCtrl.getBugs)

router.route('/api/bug/:bugId')
.get(bugsCtrl.getBug)
.put(bugsCtrl.updateBug)
.delete(bugsCtrl.removeBug)

router.param('bugId', bugsCtrl.bugByID)

export default router