import { MyComponent } from './MyComponents';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<MyComponent />
			</header>
		</div>
	);
};
