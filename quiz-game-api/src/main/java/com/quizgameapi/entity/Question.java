package com.quizgameapi.entity;

import javax.persistence.*;

@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer id;

    public Integer category;

    public Integer type;

    public Integer difficulty;

    public String question_text;

}
