import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState} from 'react'

export const getStaticProps = async () => {
  const res = await fetch('https://potofnames.com/api/participants');
  const data = await res.json();
  return{
      props: {participants: data}
  }
}
export default function dummy({participants}) {
  // typeof(participants)
  // participants.forEach(participant => {
  //   //console.log(participant);
  // });
  const newParticipant = {"id": "data", "name": "Johnny"}
  const [items, setItems] = useState(participants)
  const addItem = () => {
    setItems([...items, newParticipant]);
  }

  return (
    <div className={styles.container}>
      
      <button onClick={addItem}>
        Move 1 spot
      </button>
      <div >{items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}</div>
    </div>
  )
}