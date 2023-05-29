import { useState } from 'react';
import styles from './App.module.css';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '=', 'C'];

export const MyComponent = () => {
	const [value, setValue] = useState(0);
	const [value2, setValue2] = useState('');
	const [operator, setOperator] = useState('');
	const [finish, setFinish] = useState(false);
	let operands = value + operator + value2;

	const showValue = (num) => {
		if (value === 0) {
			setValue(num);
			setFinish(false);
		} else if (operator) {
			setValue2((preVal2) => preVal2 + num);
			setFinish(false);
		} else {
			setValue((preVal) => preVal + `${num}`);
			setFinish(false);
		}
	};

	const showOperator = (oper) => {
		if (oper === 'C') {
			setValue(0);
			setValue2('');
			setOperator('');
			setFinish(false);
		} else if (oper === '+') {
			setOperator(oper);
			setFinish(false);
		} else if (oper === '-') {
			setOperator(oper);
			setFinish(false);
		} else if (oper !== 'C' && oper !== '=') {
			setOperator(oper);
			setFinish(false);
		} else if (oper === '=') {
			setValue2('');
			setOperator('');
			setValue(eval(operands));
			setFinish(true);
		}
	};

	return (
		<div className={styles.calc} key={Math.random()}>
			<div className={finish ? styles.display_finish : styles.display}>
				{operands}
			</div>
			{numbers.map((num) => (
				<a className={styles.calcNum} key={num} onClick={() => showValue(num)}>
					{num}
				</a>
			))}
			{operators.map((oper) => (
				<a
					className={styles.calcNum}
					key={oper}
					onClick={() => showOperator(oper)}
				>
					{oper}
				</a>
			))}
		</div>
	);
};
