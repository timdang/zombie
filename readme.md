end goal is for player to complete 3 tasks before time runs out...

zombie scenario get to top of building by dawn
timer game starts + 6 minutes

present question to player

  user makes decision

  if true
    update text question
    increment time based on complexity of choice
  if false
  present alternative text question
  increment time based on complexity of choice


  question logic
    take stairs or elevator
      elevator (faster)
        display elevator pic
        arrive at floor 13 and door opens
          you find see wounded person
            display wounded person pic
            help (slower)
            kill (faster)
        run into a zombie
            display zombie pic
          use fire extinguisher (slower)
          use emergency fire ax (faster)
      stairs(slower)
      display elevator pic
      arrive at floor 13 and door opens
        you find see wounded person
          display wounded person pic
          help (slower)
          kill (faster)
      run into a zombie
          display zombie pic
        use fire extinguisher (slower)
        use emergency fire ax (faster)
    Final Decision
      if slower_count >2 loose
      otherwise win
      display win/loose picture/text
