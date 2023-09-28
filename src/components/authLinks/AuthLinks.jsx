import styles from "./authLinks.module.css";
import Link from "next/link";


function AuthLinks() {

  const status = 'notAuthenticated';

  return ( <>
    {status == 'notAuthenticated' ? (<Link href='/login'>Login</Link>
    
    ) : (
      <>
        <Link href= '/write'> Write </Link>
        <span className={styles.link}>Logout</span>
      </>
    )}

    </>
  )
}

export default AuthLinks