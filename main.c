#include <stdio.h>

int main() {
    FILE *file;
    char data[100];

    // Open file in read mode
    file = fopen("data.txt", "r");

    if (file == NULL) {
        printf("File not found!\n");
        return 1;
    }

    // Read and print file content
    while (fgets(data, 100, file) != NULL) {
        printf("%s", data);
    }

    fclose(file);
    return 0;
}
