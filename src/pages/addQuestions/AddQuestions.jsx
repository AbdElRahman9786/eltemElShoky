import  { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './addQuestions.module.css';
import { apiUrl } from '../../utils.js';
import Cookies from 'js-cookie';
import {config} from '../../App.jsx'


const QuestionnaireForm = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', questionType: 'text', isRequired: false },
  ]);

  useEffect(() => {
    // Fetch questionnaires
    
    axios.get(`${apiUrl}/questionaire`,config)
      .then((response) => {
        setQuestionnaires(response.data.questionnaires);
      })
      .catch((error) => console.error('Error fetching questionnaires:', error));
  }, []);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: '', questionType: 'text', isRequired: false },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((question, i) =>
      i === index ? { ...question, [field]: value } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    if (!selectedQuestionnaire) {
      alert('Please select a questionnaire.');
      return;
    }
    const token=Cookies.get('token');
     const Postconfig={
      headers:{
          "Content-Type": "application/json",
          'Authorization':`Bearer ${token}`
      }
  }
    axios
      .post(`${apiUrl}/questionaire/${selectedQuestionnaire}/questions`, {
        "questions": questions,
      },Postconfig)
      .then(() => {
        alert('Questions added successfully!');
        setQuestions([{ questionText: '', questionType: 'text', isRequired: false }]);
      })
      .catch((error) => {
        console.error('Error adding questions:', error);
        alert('Failed to add questions.');
      });
  };

  return (
    <div className={styles.container}>
      <h1>Add Questions to Questionnaire</h1>
      <label htmlFor="questionnaire">Select Questionnaire:</label>
      <select
        id="questionnaire"
        value={selectedQuestionnaire}
        onChange={(e) => setSelectedQuestionnaire(e.target.value)}
        className={styles.select}
      >
        <option value="">-- Select a Questionnaire --</option>
        {questionnaires.map((q) => (
          <option key={q.questionnaire_Id} value={q.questionnaire_Id}>
            {q.title}
          </option>
        ))}
      </select>

      <h2>Questions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Question Text</th>
            <th>Question Type</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) =>
                    handleQuestionChange(index, 'questionText', e.target.value)
                  }
                  className={styles.input}
                />
              </td>
              <td>
                <select
                  value={question.questionType}
                  onChange={(e) =>
                    handleQuestionChange(index, 'questionType', e.target.value)
                  }
                  className={styles.select}
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={question.isRequired}
                  onChange={(e) =>
                    handleQuestionChange(index, 'isRequired', e.target.checked)
                  }
                  className={styles.checkbox}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addQuestion} className={styles.button}>Add Question</button>
      <button onClick={handleSubmit} className={styles.button}>Add</button>
    </div>
  );
};

export default QuestionnaireForm;
