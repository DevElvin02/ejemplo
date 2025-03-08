class User {
    constructor(public name: string) { }
    
    public addUser(name: string, email: string, password: string): void {
        console.log(`User ${name} added`);
        
       
    }
}
