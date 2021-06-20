package com.quizgameapi.model.enums;

public enum difficulty {
    NONE("None"), // 0
    EASY("easy"); // 1

    private final String name;

    private difficulty(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}