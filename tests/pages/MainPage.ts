import { FrameLocator, type Locator, type Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { config } from '../helpers/config';

export type TASKTYPE = 'Build' | 'Plan' | 'Find';

export class MainPage {
  readonly page: Page;
  readonly loginPage: LoginPage;
  
  readonly sidebarElem : Locator;
  readonly NewTaskItem: Locator;
  readonly ProjectSettingsItem: Locator;
  readonly SidebarDropdownElem: Locator;
  readonly AddProjectElem: Locator;
  readonly moveToRightSideElem: Locator;
  readonly moveToLeftSideElem: Locator;
  readonly CreateProjectsButton: Locator;
  readonly ProjectsUpdatedSuccessfullyDialog: Locator;
  readonly PreviewIframe: FrameLocator;
  readonly ToDoAppInputInIframe: Locator;
  readonly filterElemDivInIframe: Locator;
  readonly DiscardTaskButton: Locator;
  readonly DiscardTaskConfirmButton: Locator;


  readonly TaskDescriptionDiv: Locator;
  readonly TaskSpecDoc: Locator;
  readonly TaskSpecDetails: Locator;


  readonly SubmitButton: Locator;

  readonly StepSelectorButton: Locator;
  readonly SendToDevsButton: Locator;
  readonly SendToDevsConfirmButton: Locator;
  readonly PreparingPRDialog: Locator;
  readonly PRDetailsButton: Locator;
  readonly PRLinkA: Locator;
  readonly GithubPRDetailsElem: Locator;

  readonly SwitchToSmartModeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);

    this.TaskDescriptionDiv = page.getByTestId('task-description-textbox');
    this.SubmitButton = page.getByTestId('submit-button');

    this.sidebarElem = page.getByTestId('sidebar');
    this.NewTaskItem = page.getByTestId('sidebar-new-task-item');
    this.ProjectSettingsItem = page.getByTestId('sidebar-project-settings-item');
    this.SidebarDropdownElem = page.locator('[data-testid="sidebar-project-dropdown-trigger"]>svg');
    this.AddProjectElem = page.locator('[aria-label="Add Projects"]');
    this.moveToRightSideElem = page.locator('[aria-label="Move selected to right"]');
    this.moveToLeftSideElem = page.locator('[aria-label="Move selected to left"]');
    this.CreateProjectsButton = page.locator("button").getByText("Create Projects");
    this.ProjectsUpdatedSuccessfullyDialog = page.getByTestId("projects-updated-successfully-alertdialog").first();
    this.PreviewIframe = page.frameLocator("iframe");
    this.ToDoAppInputInIframe = this.PreviewIframe.locator('input[placeholder="ENTER NEW DIRECTIVE..."]');
    this.filterElemDivInIframe = this.PreviewIframe.locator('#filterElem');
    this.TaskSpecDoc = this.page.getByText("Click to view full document");
    this.TaskSpecDetails = this.page.locator("div>div.prose.prose-invert");
    this.GithubPRDetailsElem = this.page.locator("#diff-comparison-viewer-container");


    this.StepSelectorButton = page.getByTestId('step-selector-button');
    this.SendToDevsButton = page.getByTestId('send-to-devs-button');
    this.PreparingPRDialog = page.getByTestId('preparing-code-for-pull-request-alertdialog').first();
    this.PRDetailsButton = page.getByTestId('files-changed-button');
    this.SwitchToSmartModeButton = page.locator('[aria-label="Switch to smart mode"]');
    this.PRLinkA = page.locator('div>a').last();
    this.DiscardTaskButton = page.getByTestId('discard-task-button');
    this.DiscardTaskConfirmButton = page.getByTestId('close-task-discard-button');

    this.SendToDevsConfirmButton = page.getByTestId('send-to-devs-confirm-button');

  }

  async goto() {
    await this.loginPage.goto();
    await this.loginPage.autorizeWithEmailAndPassword(config.TEST_EMAIL, config.TEST_PASSWORD);
    await this.page.waitForLoadState("domcontentloaded")
    await this.loginPage.NewTaskElem.waitFor({state: "attached"});
    await this.page.waitForTimeout(3000);
  }

  async clickSidebarDropdown() {
    await this.sidebarElem.waitFor({state: "attached"});
    await this.sidebarElem.click();
    await this.SidebarDropdownElem.waitFor({state: "attached"});
    await this.SidebarDropdownElem.click();
    await this.page.waitForTimeout(4000);
    await this.page.getByText("Organization Settings").waitFor({state: "visible"});
  }

  async selectProject(name : string) {
    let projectElem = await this.page.locator("li>span>div>span").getByText(name);
    await projectElem.waitFor({state: "visible"});
    await projectElem.click();
    await this.page.waitForTimeout(3000);
  }

  async discardCurrentTask() {
    await this.DiscardTaskButton.click();
    await this.DiscardTaskConfirmButton.click();
  }

  async addProjectsWithName(nameArr : string[]) {
    await this.AddProjectElem.waitFor({state: "attached"});
    await this.AddProjectElem.click({ force: true });
    await this.page.getByText("Select the repositories you would like to connect").waitFor({state: "visible"})
    for (const name of nameArr) {
        await this.page.getByText(name).waitFor({ state: "attached" });
        await this.page.getByText(name).click({ force: true });
    }
    await this.page.waitForTimeout(2500);
    await this.moveToRightSideElem.click();
    await this.CreateProjectsButton.click();
    await this.ProjectsUpdatedSuccessfullyDialog.waitFor({state: "visible"});
  }

  async removeProjectsWithName(nameArr : string[]) {
    await this.AddProjectElem.waitFor({state: "attached"});
    await this.AddProjectElem.click({ force: true });
    await this.page.getByText("Select the repositories you would like to connect").waitFor({state: "visible"})
    await this.page.waitForTimeout(5000);
    for (const name of nameArr) {
        await this.page.getByText(name).last().waitFor({ state: "attached" });
        await this.page.getByText(name).last().click({ force: true });
    }
    await this.page.waitForTimeout(2500);
    await this.moveToLeftSideElem.click();
    await this.CreateProjectsButton.click();
    await this.ProjectsUpdatedSuccessfullyDialog.waitFor({state: "visible"});
  }


  async setTaskType(type: TASKTYPE){
    await this.NewTaskItem.waitFor({state: "attached"});
    await this.StepSelectorButton.waitFor({state: "attached"});
    await this.StepSelectorButton.click();
    let taskTypeElem = await this.page.locator("ul>li>span").getByText(type);
    await taskTypeElem.waitFor({state: "visible"});
    await taskTypeElem.click();
    await this.page.waitForTimeout(2000);
  }

  async writeTaskDetailsAndSubmit(description: string) {
    await this.TaskDescriptionDiv.waitFor({state: "attached"});
    await this.TaskDescriptionDiv.click();
    await this.TaskDescriptionDiv.fill(description);
    await this.SubmitButton.click();
  }
}