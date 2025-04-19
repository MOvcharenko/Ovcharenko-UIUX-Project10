const hobby = {
    name: "gaming",
    isIndoor: true,
    weeklyHours: 5,
    tools: ["game console", "laptop"],
    getHobbySummary: function() {
      return `I enjoy ${this.name}. It's an ${this.isIndoor ? 'indoor' : 'outdoor'} hobby. I spend about ${this.weeklyHours} hours per week using tools like: ${this.tools.join(', ')}.`;
    }
  };
  console.log(hobby.getHobbySummary());