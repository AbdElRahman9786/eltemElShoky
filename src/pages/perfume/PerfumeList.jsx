import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../utils';
import axios from 'axios';
import styles from './perfume.module.css';
import {config} from '../../App.jsx'

const PerfumeList = () => {
    const [perfumes, setPerfumes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/perfume?take=1000`,config)
            .then(response => setPerfumes(response.data.perfumes))
            .catch(error => setError(error.response?.data?.message || 'An error occurred'));
    }, []);

    return (
        <div className={styles.perfumePage}>
            <div className={styles.perfumeContent}>
                <h1>Perfumes</h1>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <div className={styles.perfumeGrid}>
                    {perfumes.map(perfume => (
                        <Link to={`/perfume/${perfume.perfume_Id}`}>
                        <div key={perfume.perfume_Id} className={styles.perfumeCard}>
                                {perfume.perfume_Name}
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerfumeList;
