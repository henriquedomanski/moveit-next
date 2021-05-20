import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/henriquedomanski.png" alt="Henrique Domanski"/> 
            <div>
                <strong>Henrique Domanski</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}