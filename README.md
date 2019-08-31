# React JSON resume

A React app that generates a PDF from a [JSON resume](http://jsonresume.org)

### How to use?

1. Clone the project and install dependencies

```bash
yarn install
```

2. Create a JSON resume following the schema from http://jsonresume.org

3. Save your JSON resume to `src/data/resume.json`

4. Now you can start the application

```bash
yarn start
```
This will open a webpage at [http://localhost:3000](http://localhost:3000) with your resume converted to PDF.

### Example output

Example output looks something like the screenshot below

![Example output](https://raw.githubusercontent.com/mediaupstream/react-json-resume/master/preview.png)


### Todo

- Document the changes I made to JSON schema such as being able to optionally show/hide `work` sections
- Implement sections for the other parts of the schema, like references and education
- Make a global theme object so it's easy to change theme
- Make a "Cover Letter" page
