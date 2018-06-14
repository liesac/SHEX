/* import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { SurveyErrorComponent } from "./survey-error.component";
import { MockDataTranslationService, TranslatePipeMock } from "../../shared/services/language/data-translation.testing";
import { DataTranslationService } from "../../shared/services/language/data-translation.service";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { ApplicationSettings } from "../../settings/application-settings";


@Component({
    template: ''
})
class DummyComponent { }

describe('SurveyErrorComponent', () => {
    let component: SurveyErrorComponent;
    let fixture: ComponentFixture<SurveyErrorComponent>;
    let mockApplicationService = {};
    let activatedRouteMock = { snapshot: { params: { errorCode: '1' } } };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [DummyComponent, SurveyErrorComponent, TranslatePipeMock],
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'error/:errorCode', component: DummyComponent }
                ])
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteMock },
                { provide: DataTranslationService, useClass: MockDataTranslationService },
                { provide: ApplicationSettings, useValue: {} },
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SurveyErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should show the right error message', () => {
        component.errorCode = 0;
        expect(component.getErrorMessage()).toBe('');
        component.errorCode = 1;
        expect(component.getErrorMessage()).toBe('SurveyError.notAuthorized');
        component.errorCode = 2;
        expect(component.getErrorMessage()).toBe('SurveyError.nonAccessRights');
    });
}); */