import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  questionStats: any[];

  frozenColsForQuestionStats: any[];

  scrollableColsForQuestionsStats: any[];

  ngOnInit() {
    this.scrollableColsForQuestionsStats = [
      { field: "question", header: "Question" },
      { field: "category", header: "Category" },
      { field: "difficultyLevel", header: "Difficulty Level" },
      { field: "timePosed", header: "Time Posed" }
    ];

    this.frozenColsForQuestionStats = [{ field: "question", header: "Question" }];

    this.questionStats = [
      {
        question:
          "How does Angular 4 improved error handling, when an error is caused by something in a template?",
        category: "Angular",
        difficultyLevel: "Easy",
        timePosed: "10"
      },
      {
        question:
          "What is MVC?",
        category: "Architectures",
        difficultyLevel: "Easy",
        timePosed: "10"
      },
      {
        question:
          "We can subscribe to an observable using the . . . . . . . . The benefit of this is that Angular deals with your subscription during the lifecycle of a component. Angular will automatically subscribe and unsubscribe for you.",
        category: "RxJS",
        difficultyLevel: "Difficult",
        timePosed: "10"
      }
    ];
  }
}
