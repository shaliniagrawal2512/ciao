import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header">

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Shalini</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Programmer</p>
        </div>
      </div>
    </motion.div>
    <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut', delayChildren: 0.5 }}
        className="overlay_circle"
      >
        <img src={images.circle} alt="profile_circle" />
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
        src={images.profile} alt="profile_bg"/>
    </motion.div>
    <div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.cpp, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default AppWrap(Header, 'home');