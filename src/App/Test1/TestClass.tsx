import React from 'react';

interface Person {
    firstName: string,
    lastName: string,
    fullName: string
}

class TestClass extends React.PureComponent{

    greeter = function (person : Person) {
        return "Hello, " + person.firstName + " " + person.lastName + person.fullName;
    }
    
    render () {

        let user = new Student("Jane", "M.", "User");
        
        return <div>
            {this.greeter(user)}
        </div>
    }

}

export default TestClass;

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}