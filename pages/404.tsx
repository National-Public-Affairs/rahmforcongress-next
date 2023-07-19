import React from 'react';
import Error from '../components/Error';

const Custom404: React.FC = () => <Error status={404} message="Page not found" />;

export default Custom404;
