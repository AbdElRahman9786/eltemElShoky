import React from 'react'
import { AddQuestioer } from '../../components/adminDashboard/AddQuestioer'
import AddPerfum from '../../components/adminDashboard/AddPerfum'
import styles from './dashboard.module.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className={styles.all}>
        <h1 className={styles.heading}>Admin dashboard</h1>
        <AddQuestioer/>
        <AddPerfum/>
        <button><Link to='/addquestions'>Add Qusetions</Link></button>
        <button><Link to='/Home'>Back</Link></button>
    </div>
  )
}

export default Dashboard