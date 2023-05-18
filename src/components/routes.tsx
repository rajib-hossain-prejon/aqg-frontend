import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Layout from '../pages/Layout';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/homepage';
import LoginForm from './LoginForm';
import QuestionGenerate from './QuestionGenerate';
import QuestionPattern from './QuestionPattern';
import QuestionPatternQuestions from './QuestionPatternQuestions';
import SubjectsTable from './SubjectsTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      { path: 'login', element: <LoginForm /> },
      { path: 'subjects', element: <SubjectsTable /> },
      { path: 'subjects/question_pattern', element: <QuestionPattern /> },
      {
        path: 'question_pattern_questions',
        element: <QuestionPatternQuestions />,
      },
      {
        path: 'subjects/question_generation_page',
        element: <QuestionGenerate />,
      },
    ],
  },
]);

export default router;
