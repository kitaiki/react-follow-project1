import React from 'react';
import Contact from './Contact'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render(){

        return (
            <Contact/>
        );
    }
}

export default App;

/*
* constructor : 컴포넌트가 처음 만들어질 때 실행 된다. 기본 state를 설정 할 수 있다.
* componentWillMount : 컴포넌트가 DOM 위에 만들어지기 전에 실행된다. 돔처리 할 수 없음
* componentDidMount : 첫 렌더링 마치고 실행. 이 안에서는 다른 자바스크립트 프레임워크 연동 및 setTimeout, setInterval 및 AJAX사용 가능 
* componentWillReceiveProps : props를 받을 때 실행. props에 따라 state를 업데이트 할 때 사용하면 유용. 이 안에서 setState를 해도 괜찮음
* shouldComponentUpdate : props/state가 변경되었을 때 리렌더링을 할지말지 정함. 실제로 사용할 때는 필요한 비교를 하고 값을 반환해야함. return true(리렌더링함) / return false(리렌더링하지않음). JSON.stringify를 사용하여 여러 field를 편하게 비교
* componentWillUpdate : 컴포넌트 업데이트 전 실행. 여기서 setState 절대 사용하지 말 것 - 무한반복됨
* componentDidUpdate : 컴포넌트가 리렌더링을 마친 후 실행. 여기서도 setState 사용하지 말 것
* componentWillUnmount : 컴포넌트가 DOM에서 사라진 후 실행
*/