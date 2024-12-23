import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../../utils';
import axios from 'axios';
import styles from './perfume.module.css';
import {config} from '../../App.jsx'

const PerfumeDetails = () => {
    const { perfume_Id } = useParams();
    const [perfume, setPerfume] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/perfume/${perfume_Id}`,config)
            .then(response => setPerfume(response.data.perfume))
            .catch(error => setError(error.response?.data?.message || 'An error occurred'));
    }, [perfume_Id]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (!perfume) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.perfumePage}>
            <div className={styles.perfumeContent}>
                <h1>{perfume.perfume_Name}</h1>
                <p><strong>Brand:</strong> {perfume.perfume_Brand}</p>
                <p><strong>Description:</strong> {perfume.perfume_description}</p>
                <p><strong>Rating:</strong> {perfume.perfume_rating}</p>
                <a
                    className={styles.perfumeButton}
                    href={perfume.perfume_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    More Details
                </a>
            </div>
        </div>
    );
};

export default PerfumeDetails;
