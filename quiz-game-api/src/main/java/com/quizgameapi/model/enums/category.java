package com.quizgameapi.model.enums;

public enum category {
    NONE("None"), // 0
    GENERAL_KNOW("General Knowledge"); // 1

    private final String name;

    private category(final String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
