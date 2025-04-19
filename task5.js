class Hobby {
    constructor(name, isIndoor, weeklyHours) {
      this.name = name;
      this.isIndoor = isIndoor;
      this.weeklyHours = weeklyHours;
    }
  
    describe() {
      console.log(`My hobby is ${this.name}. It's an ${this.isIndoor ? 'indoor' : 'outdoor'} activity, and I spend ${this.weeklyHours} hours a week on it.`);
    }
  }
  
  const hobby1 = new Hobby("chess", true, 4);
  const hobby2 = new Hobby("jogging", false, 2);
  
  hobby1.describe();
  hobby2.describe();