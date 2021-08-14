import s from "../styles/ProsSaying.module.scss";
import Image from "next/image";
import React, { Component } from "react";

export class Pro extends Component {
  props = {
    img: this.img,
    nickname: this.nickname,
    description: this.description,
  };

  render() {
    return (
      <div className={s.user}>
        <Image {...this.props.img} width={76} height={76} />
        <span className={s.nickname}>{this.props.nickname}</span>
        <div className={s.description}>{this.props.description}</div>
      </div>
    );
  }
}

export default Pro;
