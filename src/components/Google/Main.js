import React /*, { useState }*/ from 'react';
import styled from 'styled-components';
//import smile from './smile.svg';

function Main({ onSearch, className }) {
//  const [value, setValue] = useState('');
//  function onChange(t) {
//      var url = '';
//      if (!t) {
//          return;
//      }
//      try {
//          url = t.contentWindow.location.href;
//      } catch (e) {
//          url = false;
//      }
//      setValue(/*t.target.value*/ url);
//  }
//  function onClick() {
//      onSearch(value);
//  }
//
//  function onKeyDown(e) {
//    if (e.key !== 'Enter') return;
//    onSearch(value);
//  }
  return (
    <div>
      <iframe src="https://bing.com" title="Internet Search" onLoad="try {alert(this.contentWindow.location);} catch (e) {alert('');};" role="application" sandbox="allow-modals allow-scripts allow-same-origin allow-forms allow-popups" width="100%" height="1000px" allow="fullscreen; autoplay;" loading="lazy">
      </iframe>
    </div>
  );
}

export default styled(Main)`
  height: 100%;
  background: white;
  position: relative;
  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 13px;
    color: rgb(80, 80, 80);
    * {
      padding-right: 15px;
      cursor: pointer;
    }
    .text:hover {
      text-decoration: underline;
    }
    img {
      width: 48px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      height: 92px;
      width: 272px;
      margin-top: 198px;
    }
    .search-bar {
      margin-left: 11px;
      margin-top: 26px;
      width: 586px;
      height: 46px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding: 0 8px 0 16px;
      &:hover {
        box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.3);
      }
      input {
        border: none;
        color: rgba(0, 0, 0, 0.87);
        height: 100%;
        flex: 1;
        height: 34px;
        margin-top: 5px;
        font-size: 16px;
        border: 0;
        outline: 0;
      }

      .icon {
        width: 40px;
        padding: 0 8px;
        height: 44px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          height: 24px;
          width: 24px;
        }
      }
    }
    .buttons {
      width: 100%;
      height: 36px;
      margin-top: 31px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 0 16px;
        height: 36px;
        margin: 0 6px;
        border: 0;
        font-weight: 700;
        font-size: 13px;
        color: rgb(120, 120, 120);
        border: 1px transparent solid;
        background: rgb(242, 242, 242);
      }
      button:hover {
        border-radius: 2px;
        color: rgb(34, 34, 34);
        background: rgb(248, 248, 248);
        border: 1px rgb(198, 198, 198) solid;
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
      }
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .items {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left {
      left: 3px;
    }
    .right {
      right: 3px;
    }
    .left .item {
      padding-left: 27px;
    }
    .right .item {
      padding-right: 27px;
    }
  }

  @media (max-width: 768px) {
    header {
      img {
        width: 36px;
      }
    }
    .content .search-bar {
      width: 90%;
      margin-left: 0;
    }
    .logo {
      width: 204px;
      height: 69px;
    }
    footer {
      .left .item {
        padding-left: 14px;
      }
      .right .item {
        padding-right: 14px;
      }
      .lower {
        .item {
          display: none;
        }
      }
    }
  }
`;
