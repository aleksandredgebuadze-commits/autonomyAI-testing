import { test, expect } from '../../fixtures';


test.describe.skip('Full flow of task managment', () => {
  test('Add project in AutonomyAI studio', async ({ page ,mainPage }) => {
    await mainPage.goto();
    await mainPage.clickSidebarDropdown();
    await mainPage.addProjectsWithName(
      [
        "aleksandredgebuadze-commits/jira-clone-test", 
        "aleksandredgebuadze-commits/testRepo"
      ]
    );
  });

  test('Create find task for a project', async ({ page, mainPage }) => {
    await mainPage.goto();
    await mainPage.clickSidebarDropdown();
    await mainPage.selectProject("testRepo");
    await mainPage.setTaskType("Find");
    await mainPage.SwitchToSmartModeButton.click();
    await mainPage.writeTaskDetailsAndSubmit("find component details which is responsible for list creation");
    await mainPage.TaskDescriptionDiv.waitFor({state: "visible"})
    await page.getByText("Detect Component").first().waitFor({ state: "attached", timeout: 60000 })
    await mainPage.ToDoAppInputInIframe.waitFor({ state: "visible", timeout: 220000})
  });

  test('Create Planing task for a project', async ({page, mainPage }) => {
    await mainPage.goto();
    await mainPage.clickSidebarDropdown();
    await mainPage.selectProject("testRepo");
    await mainPage.setTaskType("Plan");
    await mainPage.SwitchToSmartModeButton.click();
    await mainPage.writeTaskDetailsAndSubmit("add filtering option in todo list page. element should have clear structure and main elment should id='filterElem' ");
    await mainPage.TaskDescriptionDiv.waitFor({state: "visible"});
    await page.getByText("Planning").first().waitFor({ state: "attached", timeout: 60000 });
    await mainPage.TaskSpecDoc.waitFor({ state: "attached", timeout: 220000 });
    await mainPage.TaskSpecDoc.click();
    await mainPage.TaskSpecDetails.waitFor({ state: "attached", timeout: 220000 });
    expect(
      (await mainPage.TaskSpecDetails.innerText()).length
    ).toBeGreaterThan(100)
  });

  test('Create Build task for a project', async ({page, mainPage }) => {
    await mainPage.goto();
    await mainPage.clickSidebarDropdown();
    await mainPage.selectProject("testRepo");
    await mainPage.setTaskType("Build");
    await mainPage.SwitchToSmartModeButton.click();
    await mainPage.writeTaskDetailsAndSubmit("add filtering option in todo list page. element should have clear structure and main elment should id='filterElem' ");
    await mainPage.TaskDescriptionDiv.waitFor({state: "visible"})
    await page.getByText("Code Generation").waitFor({ state: "attached", timeout: 60000 })
    await mainPage.filterElemDivInIframe.waitFor({ state: "visible", timeout: 350000})
    await mainPage.SendToDevsButton.waitFor({ state: "visible" })
    await mainPage.SendToDevsButton.click({timeout: 250000 })
    await mainPage.SendToDevsConfirmButton.waitFor({ state: "visible" })
    await mainPage.SendToDevsConfirmButton.click()
    await mainPage.PreparingPRDialog.waitFor({ state: "visible" })
    await mainPage.PRDetailsButton.waitFor({ state: "visible", timeout: 450000 })
    await mainPage.PRDetailsButton.click();
    await mainPage.PRLinkA.waitFor({state: "visible"});
    const link = await mainPage.PRLinkA.getAttribute("href");
    await mainPage.discardCurrentTask();
    await page.goto(link!);
    await mainPage.GithubPRDetailsElem.waitFor({ state: "visible" });
  });

  test.only('remove projects from list', async ({ mainPage }) => {
    await mainPage.goto();
    await mainPage.clickSidebarDropdown();
    await mainPage.removeProjectsWithName(
      [
        "aleksandredgebuadze-commits/jira-clone-test", 
        "aleksandredgebuadze-commits/testRepo"
      ]
    );
  });
});