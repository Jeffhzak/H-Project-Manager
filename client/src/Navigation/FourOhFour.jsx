import React from 'react'
import { QuestionIcon } from '../Components/CustomIcons/QuestionIcon'

export const FourOhFour = () => {
    return (
          <div className="flex justify-around mt-10">
            <div className="flex flex-col gap-6">
              <span className="text-8xl">404: Page Not Found</span>
              <span className="text-2xl ml-10">Maybe you took a wrong turn at the previous junction?</span>
            </div>
            <div className="spacer">
              <QuestionIcon/>
            </div>
            </div>
    )
}
