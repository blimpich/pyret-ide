Name (type) - indicates name of component and type
-> - indicates interaction
/* STATE */ - indicates start and end of state dependent components

Application
  Home Page (page https://code.pyret.org/)
    Dashboard (section)
      My Programs (button)
        -> link to google drive
      Pyret (button)
        -> link to Pyret.org
      Start Coding (button)
        -> link to Pyret Editor
    Guide (section)
      Links and text
        -> tutorials and examples

  Pyret Editor (page https://code.pyret.org/editor)
    Toolbar (section)
      Menu (section)
        Pyret (button)
          -> link to Home Page
      /*
      IF STATE (connected to Google Drive)
        Program Name (form)
          -> sets file name to input
        Save (button)
          -> saves file to Google Drive
      /*
      IF STATE (saved file)
        Share... (button)
          -> copies link to file
      */
        More (button)
          -> dropdown menu
          Download this file (button)
            -> downloads file (internal/external state?)
          Documentation (button)
            -> link to Documentation
          View Files in Drive (button)
            -> link to Google Drive
          Font (section)
            + size (button)
              -> inreases size of text
            - size (button)
              -> decreases size of text
          Report an Issue (button)
            -> link to Github
          Discuss Pyret (button)
            -> link to Google Groups
          Log out (button)
      */
      /*
      IF STATE !(connected to Google Drive)
        Connect to Google Drive (button)
          -> link to Google authentication
        More (button)
          -> dropdown menu
          Download this file (button)
            -> downloads file (internal/external state?)
          Documentation (button)
            -> link to Documentation
          Font (section)
            + size (button)
              -> inreases size of text
            - size (button)
              -> decreases size of text
          Report an Issue (button)
            -> link to Github
          Discuss Pyret (button)
            -> link to Google Groups
          Log out (button)
      */
      Controls (section)
        Run (button)
          -> compiles and displays code
        Stop (button)
          -> terminates code
          
    Editor Window (section)
      Code Pane (form)
        -> provides input for compiler
      Compile Window (section)
        -> displays output of compiler