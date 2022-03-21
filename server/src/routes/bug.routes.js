import express from 'express'
import bugsCtrl from '../controllers/bug.controller'

const router = express.Router()

router.route('/api/bugs')
.post(bugsCtrl.createBug)
.get(bugsCtrl.getBugs)

router.route('/api/bugs/:bugsId')
.get(bugsCtrl.getBug)
.put(bugsCtrl.updateBug)
.delete(bugsCtrl.removeBug)

router.param('bugsId', bugsCtrl.bugByID)

export default router