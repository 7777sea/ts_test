import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

class Test extends React.PureComponent{
  
    greeter = function (person: Person) {
        return "Hello, " + person.firstName + person.lastName;
    }
    
    render(){
        
        let user = {
            firstName: 'leo1',
            lastName: 'leo2'
        };

        return <div>
            {this.greeter(user)}
        </div>
    }
    
}

export default Test;

