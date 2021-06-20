package com.quizgameapi.model.enums;

public enum type {
    NONE("None"), // 0
    MULTIPLE("multiple"); // 1

    private final String name;

    private type(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}