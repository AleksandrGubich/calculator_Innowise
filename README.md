TASK https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f

[RU-ru]
КАК ЗАПУСТИТЬ ПРИЛОЖЕНИЕ

Для запуска данного проекта следуйте приведённой ниже инструкции:

1. Скачивание проекта:
   Скачайте проект с репозитория на локальный компьютер или перейдите по следующей ссылке: [https://aleksandrgubich.github.io/calculator_Innowise/].
2. Установка зависимостей и запуск проекта локально:
   Перейдите в папку скачанного проекта calculator_Innowise.
   Выполните следующую команду в терминале для установки всех необходимых зависимостей: npm ci
   После завершения установки зависимостей для запуска проекта введите команду: npm run start
   Ваша среда разработки автоматически откроет браузер по умолчанию и загрузит страницу приложения.

3. Структура проекта:
   webpack.config.js - этот файл содержит конфигурацию для сборщика модулей Webpack, который компилирует, оптимизирует и собирает исходные файлы проекта (например, JavaScript, CSS) в конечный исполняемый код. Webpack также управляет зависимостями, обеспечивая их корректную загрузку и подключение.

   package.json и package-lock.json:
   package.json содержит основную информацию о проекте, включая метаданные (название, версию), зависимости, скрипты для запуска проекта, а также настройки конфигурации.
   package-lock.json фиксирует точные версии всех установленных зависимостей, что обеспечивает детерминированную установку пакетов для всех пользователей проекта.

   .prettierrc - этот файл хранит конфигурацию для Prettier — инструмента для форматирования кода. Он содержит настройки, которые управляют правилами форматирования (например, длина строки, использование кавычек и т.д.), обеспечивая единый стиль кода в проекте.

   .gitignore - содержит список файлов и директорий, которые Git будет игнорировать при отслеживании изменений в проекте. Обычно здесь указываются временные файлы, артефакты сборки (например, папка dist), конфиденциальные данные и другие ненужные файлы.

   .eslintrc.json - это конфигурационный файл для ESLint — инструмента для анализа кода на наличие ошибок и проверок соблюдения код-стиля. Он задаёт правила и настройки, которые помогают поддерживать качество кода, предотвращая ошибки.

   src/ - папка, содержащая исходные файлы проекта, которые используются для компиляции и сборки итоговой версии приложения. В ней находятся все скрипты, стили и другие ресурсы, необходимые для работы проекта.

   dist/ - папка, в которой хранится скомпилированная итоговая версия проекта, готовая для развертывания и использования в продакшене.

[En-en]
HOW TO RUN THE APP

Instructions for Running the Project

1. Downloading the Project:
   Download the project from the repository to your local machine or visit the following link: [https://aleksandrgubich.github.io/calculator_Innowise/].

2. Installing Dependencies and Running the Project Locally:
   Navigate to the folder of the downloaded project calculator_Innowise.
   Run the following command in the terminal to install all the necessary dependencies: npm ci
   After the dependencies are installed, start the project by running the command: npm run start
   Your development environment will automatically open the application page in your default browser.

3. Project Structure:
   webpack.config.js - this file contains the configuration for Webpack, a module bundler that compiles, optimizes, and bundles the project’s source files (e.g., JavaScript, CSS) into the final executable code. Webpack also manages dependencies, ensuring they are loaded and connected properly.

   package.json and package-lock.json:
   package.json contains key project information, including metadata (name, version), dependencies, scripts for running the project, and configuration settings.
   package-lock.json locks the exact versions of all installed dependencies, ensuring deterministic package installation for all users of the project.

   .prettierrc - this file holds the configuration for Prettier, a code formatting tool. It defines settings that control formatting rules (e.g., line length, quote usage), ensuring a consistent code style across the project

   .gitignore - this file lists files and directories that Git should ignore when tracking changes in the project. It typically includes temporary files, build artifacts (such as the dist folder), sensitive data, and other unnecessary files.

   .eslintrc.json - this is the configuration file for ESLint, a tool for identifying code errors and enforcing code style rules. It defines the rules and settings that help maintain code quality and prevent mistakes.

   src/ - this folder contains the project's source files, which are used for compiling and building the final version of the application. It includes all the scripts, styles, and other resources needed for the project.

   dist/ - this folder holds the compiled final version of the project, ready for deployment and production use.
